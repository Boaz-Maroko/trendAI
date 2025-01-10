# TrendAI Dashboard

Welcome to **TrendAI Dashboard**! This application allows users to manage and analyze campaigns, view their performance metrics, and interact with data in an easy-to-use interface.

## Overview

TrendAI Dashboard provides a platform to track and manage campaigns with a focus on performance insights. The app allows users to:
- View a list of campaigns
- Get detailed performance analytics for each campaign
- Interact with the data seamlessly

This app is built with **Next.js** and **Tailwind CSS** to provide a responsive, fast, and visually appealing experience. It includes both frontend and backend components, using API routes to interact with the backend for data fetching.

## Project Structure

Here’s a breakdown of the project's file structure:


### `pages/api/campaigns/index.js`

This file serves as the API route to retrieve all campaigns. It handles a GET request and returns an array of campaign data, which is used on the **Campaigns Overview** page.

### `pages/api/campaigns/[campaignId].js`

This API route fetches a specific campaign's details by its ID. It’s used on the **Campaign Detail Page** to display detailed performance data for each campaign.

### `pages/campaigns/index.js`

This is the frontend page for the campaign list. It displays a list of all campaigns fetched from the API and allows users to click on each campaign to view detailed performance.

### `pages/campaigns/[campaignId].js`

This page displays detailed information about a specific campaign, including performance data like posts, engagements, and more. The data is fetched via the `/api/campaigns/[campaignId]` endpoint.

### `pages/_app.js`

This file is the main application wrapper, where global styles, layout, and settings are applied. It ensures consistency across all pages of the app.

### `pages/_document.js`

This custom document file is used to configure the HTML document structure, such as linking to custom fonts or meta tags.

## Features

### Campaign Management
- **Campaign List**: A complete list of campaigns is available for viewing, with each campaign showing essential information like name, status, and deadline.
- **Campaign Details**: Click on any campaign to get detailed performance insights, including posts, engagement metrics, and more.

### Performance Insights
- **Performance Overview**: View overall performance metrics such as the number of posts and engagement (likes, shares, etc.) for campaigns.
  
### Dashboard
- The **Dashboard** is the main landing page that provides a summary of campaigns and performance metrics at a glance.
- Displays quick statistics on the total number of campaigns, active campaigns, and completed campaigns.

### Responsive Design
- The app is fully responsive, meaning it works across different screen sizes, from mobile to desktop.
- Tailwind CSS is used to ensure that the design is sleek and adapts based on the device size.

## Installation and Setup

To get started with the application locally, follow these steps:

1. **Clone the Repository**

```bash
git clone ...
```

2. **Install Dependencies**
Navigate into the project directory and install the required dependencies.

```bash
cd trendai-dashboard npm install
```

3. **Start the Development Server**
Run the following command to start the app in development mode.
```bash
npm run dev
```

4. **Visit the Application**
Open your browser and go to `http://localhost:3000` to interact with the app.

## Tailwind CSS Configuration

The app uses **Tailwind CSS** for styling. The configuration file is located at `tailwind.config.js`, where you can customize the utility-first CSS framework.

## API Endpoints

### `/api/campaigns`

- **Method**: GET
- **Description**: Fetches all campaigns available in the system.
- **Response**: An array of campaigns.

Example:
```json
[
{
 "id": "1",
 "name": "Campaign 1",
 "status": "Ongoing",
 "deadline": "2025-01-20"
},
{
 "id": "2",
 "name": "Campaign 2",
 "status": "Completed",
 "deadline": "2025-01-18"
}
]
```
## /api/campaigns/[campaignId]
- Method: GET
- Description: Fetches details of a specific campaign by ID.
- Response: An object containing campaign details.



