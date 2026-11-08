import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const StarRating = ({ rating = 5, size = 18, color = "#F59E0B" }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
        >
            <Star
            size={size}
            className={`${i < rating ? 'fill-current' : ''}`}
            color={color}
            fill={i < rating ? color : 'none'}
            strokeWidth={1.5}
            />
        </motion.div>
      ))}
    </div>
  );
};

export default StarRating;