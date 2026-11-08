
# 🔧 Email Sending System - Debugging Guide

## Table of Contents
1. [System Overview](#system-overview)
2. [Checking Supabase Function Logs](#checking-supabase-function-logs)
3. [Checking Resend Email Logs](#checking-resend-email-logs)
4. [Verifying RESEND_API_KEY](#verifying-resend_api_key)
5. [Common Error Messages & Solutions](#common-error-messages--solutions)
6. [Testing Edge Functions Locally](#testing-edge-functions-locally)
7. [Manual Function Invocation](#manual-function-invocation)
8. [Contact Support](#contact-support)

---

## System Overview

The email sending system consists of three main components:

### 1. Edge Functions (Backend)
- **send-contact-emails**: Handles general contact form submissions
- **send-devis-email**: Handles devis (quote) request submissions
- **send-form-emails**: Handles other form submissions (quote forms, local forms)

### 2. Frontend Forms
- **ContactPage.jsx**: Main contact page form
- **DevisEtPrixPage.jsx**: Devis/quote request page
- **QuoteForm.jsx**: Quick quote form component

### 3. Email Service
- **Resend API**: Third-party email delivery service
- Requires RESEND_API_KEY to be configured in Supabase secrets

---

## Checking Supabase Function Logs

### Step 1: Access Function Logs
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **Edge Functions** in the left sidebar
4. Click on the function you want to inspect:
   - `send-contact-emails`
   - `send-devis-email`
   - `send-form-emails`
5. Click on the **Logs** tab

### Step 2: Understanding Log Entries

All functions include detailed console.log statements:

#### Function Start
