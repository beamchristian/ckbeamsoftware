// app/api/github-contributions/beamchristian/route.ts
import { ContributionApiResponse } from "@/Types/github";
import { NextResponse, type NextRequest } from "next/server";

// Optional: Configure route segment options if needed (e.g., caching)
// export const revalidate = 3600; // Cache the API route response for 1 hour

// Remove the { params } argument as the route is now static
export async function GET(request: NextRequest) {
  // Hardcoding the username is correct for this static route
  const username = "beamchristian";
  const currentYear = new Date().getFullYear();
  console.log(currentYear);

  // The external API endpoint
  const externalApiURL = `https://github-contributions-api.jogruber.de/v4/${username}?y=${currentYear}`;
  console.log(`API Route: Fetching ${externalApiURL}`);

  try {
    // Fetch from the external API within the API route
    // Use 'no-store' to ensure this route always fetches fresh data from the external source,
    // Caching control will be handled by the component calling this API route.
    const externalResponse = await fetch(externalApiURL, { cache: "no-store" });

    if (!externalResponse.ok) {
      // Forward the status code if possible, provide a generic error
      console.error(
        `API Route: External fetch failed with status ${externalResponse.status}`
      );
      // Use a generic 500 or forward the external status if appropriate
      return NextResponse.json(
        {
          error: `Failed to fetch contributions from external source (${externalResponse.status})`,
        },
        {
          status:
            externalResponse.status >= 400 ? externalResponse.status : 500,
        } // Use original status if >= 400, else 500
      );
    }

    // Parse the data from the external API
    const data: ContributionApiResponse = await externalResponse.json();

    // Validate the structure slightly
    if (!data || !Array.isArray(data.contributions)) {
      console.error("API Route: Invalid data format from external source");
      return NextResponse.json(
        { error: "Received invalid data format from external source" },
        { status: 502 } // Bad Gateway - indicates an issue with the upstream server/response
      );
    }

    // Success: Return the fetched data using NextResponse
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(
      "API Route: Internal server error fetching contributions:",
      error
    );
    // Catch network errors or JSON parsing errors
    return NextResponse.json(
      { error: "Internal server error while fetching contributions" },
      { status: 500 }
    );
  }
}
