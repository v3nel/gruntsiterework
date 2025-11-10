# Grünt Site Rework
[![wakatime](https://wakatime.com/badge/github/v3nel/gruntsiterework.svg)](https://wakatime.com/badge/github/v3nel/gruntsiterework)
[![codecov](https://codecov.io/github/v3nel/gruntsiterework/branch/main/graph/badge.svg)](https://codecov.io/github/v3nel/gruntsiterework)

## Overview

This project is a reimplementation of the Grünt website (originally built on Squarespace) with a modern, maintainable stack. The goal is to provide a flexible front-end and an administrative dashboard to manage podcasts, freestyles and live content, automate publishing workflows and integrate third‑party services (for example YouTube and Ausha).

Primary objectives:
- Replace the legacy site with a responsive, accessible front-end.
- Provide a content dashboard for uploads, scheduling and metadata.
- Integrate publishing pipelines to major platforms (Spotify, Apple Podcasts, YouTube).
- Maintain clear separation between front-end and back-end responsibilities.

## Architecture

- Front-end: Next.js (App Router) and React, Tailwind CSS for styling.
- Back-end: Express.js (work in progress). Database access and secrets are handled server-side.
- Development approach: prioritize front-end scaffolding and UX, then adapt the back-end API to match front-end requirements.
- Optional: Prisma or another ORM for database access, server-side modules for secure data retrieval.

## Roadmap

<ul>
  <li>
    <label><input type="checkbox" disabled> Website</label>
    <ul>
      <li><label><input type="checkbox" disabled> Home page</label></li>
      <li><label><input type="checkbox" disabled checked> Contact page</label></li>
      <li><label><input type="checkbox" disabled> List pages (archive / index)</label></li>
      <li><label><input type="checkbox" disabled> Detail pages (podcast / episode / article)</label></li>
    </ul>
  </li>
  <li><label><input type="checkbox" disabled> Dashboard (admin interface)</label></li>
  <li><label><input type="checkbox" disabled> Public API for client consumption</label></li>
  <li><label><input type="checkbox" disabled> Dashboard API (secure endpoints for admin actions)</label></li>
  <li><label><input type="checkbox" disabled> Integrations (YouTube, Ausha, analytics)</label></li>
  <li><label><input type="checkbox" disabled> Authentication and role-based access for the dashboard</label></li>
</ul>

## Development notes

- Keep sensitive logic (database credentials, private keys) in server-only modules.
- Use Server Components for content rendering when possible to improve performance and security.
- Tailwind CSS is used site-wide; restart the dev server after changing tailwind.config.ts.

## Contact

For inquiries or collaboration: [me@v3nel.me](mailto:me@v3nel.me)