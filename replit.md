# Overview

This is a full-stack web application for Marpe, a procurement and sourcing company. The application is built as a single-page React application with an Express.js backend API, featuring a company website with multiple pages including home, about, collections, pricing, customer testimonials, and a contact form. The site showcases Marpe's services in connecting African businesses with global manufacturers and suppliers.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Build Tool**: Vite for development and bundling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form submission and data retrieval
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **Development**: Hot module replacement and middleware logging

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Tables**: 
  - `users` table with id, username, password, and timestamps
  - `contact_messages` table for storing contact form submissions
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle Kit for database migrations

## Shared Type System
- **Schema Definition**: Centralized schema definitions in `shared/schema.ts`
- **Type Safety**: Full TypeScript coverage from database to frontend
- **Validation**: Zod schemas for runtime validation and type inference

## Development Architecture
- **Monorepo Structure**: Client and server code in same repository with shared types
- **Hot Reloading**: Vite dev server with Express middleware integration
- **Error Handling**: Comprehensive error handling with user-friendly error messages
- **Code Organization**: Clear separation between client, server, and shared code

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Connection**: Environment variable-based database URL configuration

## UI and Styling
- **Radix UI**: Comprehensive set of accessible React components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: External font loading for typography

## Development Tools
- **Replit Integration**: Development environment optimizations and error overlays
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Form Handling
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

## Utilities
- **Class Variance Authority**: Utility for creating component variants
- **clsx**: Conditional className utility
- **date-fns**: Date manipulation and formatting library
- **nanoid**: Unique ID generation