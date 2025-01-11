/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to read their own submissions
    - Add policy for anyone to insert submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read their own submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);