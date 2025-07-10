# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application created with v0.dev that serves as a simple welcome site. The project is automatically synced with v0.dev deployments and uses pnpm for package management.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build production version
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (configured to ignore errors during builds)

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Package Manager**: pnpm (lockfile: pnpm-lock.yaml)
- **UI Components**: Radix UI primitives with custom theming
- **Deployment**: Vercel (Hong Kong region)

## Key Files

- `app/page.tsx` - Main welcome page with dynamic background
- `app/api/background/route.tsx` - API route generating dynamic background images using Next.js ImageResponse
- `components.json` - shadcn/ui configuration
- `lib/utils.ts` - Utility functions using clsx and tailwind-merge
- `vercel.json` - Deployment configuration with HKG region and pnpm build command

## Styling System

- Uses CSS variables for theming defined in `app/globals.css`
- Tailwind configured with custom color palette and design tokens
- Component styling follows shadcn/ui patterns with `cn()` utility for className merging

## API Routes

The project includes a background image generation API at `/api/background` that:
- Uses Next.js ImageResponse to generate dynamic backgrounds
- Configured with nodejs runtime for deployment compatibility
- Has a 30-second maxDuration in Vercel settings

## Build Configuration

- ESLint and TypeScript errors are ignored during builds (configured in next.config.mjs)
- Images are unoptimized for better deployment compatibility
- Uses experimental App Router features

## Development Notes

- Project is synchronized with v0.dev - changes made in v0.dev are automatically pushed to this repository
- Uses absolute imports with `@/*` path mapping
- No test configuration present in the project