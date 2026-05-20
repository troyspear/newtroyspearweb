#!/bin/bash
echo "Cleaning stale Next.js cache and restarting dev server..."
rm -rf .next
npm run dev
