import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/customSupabaseClient';
import { useAuth } from '../contexts/SupabaseAuthContext';
import { useNavigate } from 'react-router-dom';
import { 
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from '@/components/ui/table';
import { 
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, Trash2, Eye, Download, LogOut, RefreshCw, MailCheck, MailWarning, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminMessagesPage = () => {
  const { signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [resendingId, setResendingId] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch messages"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, status: newStatus } : msg
      ));
      
      toast({ title: "Status updated" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update status"
      });
    }
  };

  const handleResendEmail = async (msg) => {
    setResendingId(msg.id);
    try {
        // We pass ALL details to the edge function so it doesn't have to fetch them again
        // AND we pass submission_id so it knows it's a resend (no new insert)
        const payload = {
            nom: msg.nom,
            telephone: msg.telephone,
            email: msg.email,
            adresse: msg.adresse,
            message: msg.message,
            submission_id: msg.id
        };

        const { data, error } = await supabase.functions.invoke('send-contact-emails', {
            body: payload
        });

        if (error) throw error;
        if (!data?.success) throw new Error(data?.error || "Unknown server error");

        toast({
            title: "Emails Resent Successfully",
            description: "Notifications sent to Admins and Client.",
            className: "bg-green-600 text-white"
        });

        // Update local state to reflect sent
        setMessages(messages.map(m => 
            m.id === msg.id ? { ...m, email_sent: true, email_sent_at: new Date().toISOString() } : m
        ));

    } catch (error) {
        console.error("Resend error", error);
        toast({
            variant: "destructive",
            title: "Failed to resend email",
            description: error.message || "Please check logs or try again later."
        });
    } finally {
        setResendingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.filter(msg => msg.id !== id));
      toast({ title: "Message deleted" });
      if (selectedMessage?.id === id) setSelectedMessage(null);

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete message"
      });
    }
  };

  const exportCSV = () => {
    const headers = ['Date', 'Nom', 'Email', 'Telephone', 'Adresse', 'Message', 'Status', 'Email Sent'];
    const csvContent = [
      headers.join(','),
      ...messages.map(m => [
        `"${new Date(m.created_at).toLocaleString()}"`,
        `"${m.nom}"`,
        `"${m.email}"`,
        `"${m.telephone}"`,
        `"${m.adresse}"`,
        `"${m.message.replace(/"/g, '""')}"`,
        `"${m.status}"`,
        `"${m.email_sent ? 'Yes' : 'No'}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'contact_submissions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Admin Messages</h1>
          <div className="flex gap-4">
             <Button variant="outline" onClick={fetchMessages} disabled={loading}>
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
             </Button>
             <Button variant="outline" onClick={exportCSV} className="flex gap-2">
                <Download size={16} /> Export CSV
             </Button>
             <Button variant="destructive" onClick={handleLogout} className="flex gap-2">
                <LogOut size={16} /> Logout
             </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
           {loading ? (
             <div className="p-12 flex justify-center">
                <Loader2 className="animate-spin h-8 w-8 text-primary-600" />
             </div>
           ) : messages.length === 0 ? (
             <div className="p-12 text-center text-slate-500">
                No messages found.
             </div>
           ) : (
             <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Nom</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Email Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {messages.map((msg) => (
                            <TableRow key={msg.id}>
                                <TableCell className="whitespace-nowrap text-xs text-slate-500">
                                    {new Date(msg.created_at).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="font-medium">{msg.nom}</TableCell>
                                <TableCell className="text-slate-600">{msg.email}</TableCell>
                                <TableCell>
                                    <select 
                                        value={msg.status}
                                        onChange={(e) => handleStatusUpdate(msg.id, e.target.value)}
                                        className={`text-xs font-semibold px-2 py-1 rounded-full border-none outline-none cursor-pointer ${
                                            msg.status === 'new' ? 'bg-blue-100 text-blue-700' :
                                            msg.status === 'read' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-green-100 text-green-700'
                                        }`}
                                    >
                                        <option value="new">New</option>
                                        <option value="read">Read</option>
                                        <option value="replied">Replied</option>
                                    </select>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {msg.email_sent ? (
                                            <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                                                <MailCheck size={12} /> Sent
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
                                                <MailWarning size={12} /> Pending
                                            </span>
                                        )}
                                        <Button 
                                            size="sm" 
                                            variant="ghost" 
                                            className="h-6 w-6 p-0 hover:bg-slate-100" 
                                            onClick={() => handleResendEmail(msg)}
                                            disabled={resendingId === msg.id}
                                            title="Resend email"
                                        >
                                            {resendingId === msg.id ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} className="text-blue-500" />}
                                        </Button>
                                    </div>
                                    {msg.email_sent_at && (
                                        <div className="text-[10px] text-slate-400 mt-1">
                                            {new Date(msg.email_sent_at).toLocaleTimeString()}
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell className="text-right space-x-2">
                                    <Button size="sm" variant="ghost" onClick={() => setSelectedMessage(msg)}>
                                        <Eye size={16} className="text-slate-500" />
                                    </Button>
                                    <Button size="sm" variant="ghost" onClick={() => handleDelete(msg.id)}>
                                        <Trash2 size={16} className="text-red-400 hover:text-red-600" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
             </div>
           )}
        </div>

        <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Message Details</DialogTitle>
                    <DialogDescription>
                        Received on {selectedMessage && new Date(selectedMessage.created_at).toLocaleString()}
                    </DialogDescription>
                </DialogHeader>
                {selectedMessage && (
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold text-sm text-slate-500 mb-1">Nom</h4>
                                <p>{selectedMessage.nom}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm text-slate-500 mb-1">Téléphone</h4>
                                <p>{selectedMessage.telephone}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm text-slate-500 mb-1">Email</h4>
                                <p>{selectedMessage.email}</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-sm text-slate-500 mb-1">Adresse</h4>
                                <p>{selectedMessage.adresse || 'N/A'}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-semibold text-sm text-slate-500 mb-2">Message</h4>
                            <div className="bg-slate-50 p-4 rounded-lg text-sm leading-relaxed whitespace-pre-wrap">
                                {selectedMessage.message}
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t flex justify-end">
                             <Button 
                                variant="outline"
                                onClick={() => handleResendEmail(selectedMessage)}
                                disabled={resendingId === selectedMessage.id}
                            >
                                {resendingId === selectedMessage.id ? (
                                    <><Loader2 size={16} className="animate-spin mr-2" /> Sending...</>
                                ) : (
                                    <><Send size={16} className="mr-2" /> Resend Email</>
                                )}
                            </Button>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminMessagesPage;