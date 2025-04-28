// app/components/MyGithubCalendar.tsx
"use client"; // This component runs on the client

import React, { useEffect, useRef, useState } from "react"; // Import useState
import GitHubCalendar from "react-github-calendar";
import GithubSVG from "./GithubSVG";

// --- Component Props ---
interface MyGithubCalendarProps {
  username: string;
  className?: string;
}
interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

// Defines the structure of a single contribution day,
// which is expected by react-github-calendar
interface Contribution {
  date: string; // YYYY-MM-DD format
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // Level of contribution intensity
}

// Defines the structure of the response from the github-contributions-api
interface ContributionApiResponse {
  contributions?: Contribution[]; // Array of contribution days
  total?: {
    [year: string]: number; // Total contributions per year (e.g., { "2023": 1234, "2024": 567 })
  };
  // The API might return other fields, but these are the ones used in your code
  error?: string; // Add an optional error field just in case the API returns it
}

// --- Client Component with Client-Side Data Fetching ---
export default function MyGithubCalendar({
  // Removed async keyword
  username,
  className,
}: MyGithubCalendarProps) {
  const calendarRef = useRef<HTMLDivElement>(null);

  // Use state to manage data, loading, and error states
  const [contributionData, setContributionData] =
    useState<ContributionApiResponse | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });
  const [blockSize, setBlockSize] = useState<number>(0);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") {
      return;
    }

    // Handler to call on window resize
    function handleResize() {
      // Set window width and height to state
      setWindowSize({
        width: window.innerWidth, // window.innerWidth is a number
        height: window.innerHeight, // window.innerHeight is a number
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.height, windowSize.width]);

  useEffect(() => {
    if (windowSize.height === undefined || windowSize.width === undefined) {
      return;
    }
    if (windowSize.width > 1279) {
      setBlockSize(24);
    } else {
      setBlockSize(14);
    }
  }, [windowSize.width, windowSize.height]);

  // useEffect to perform client-side data fetching after mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      setFetchError(null); // Clear previous errors
      setContributionData(null); // Clear previous data

      try {
        const internalApiUrl = `/api/github-contributions/${username}`; // Use relative path

        const response = await fetch(internalApiUrl); // Client-side fetch

        if (!response.ok) {
          let errorJson: { error?: string } = {};
          try {
            errorJson = await response.json();
          } catch (e) {
            /* Ignore if body isn't JSON */
            console.log(e);
          }
          const errorMsg =
            errorJson?.error ||
            `Failed to fetch from internal API (${response.status})`;
          setFetchError(errorMsg);
          console.error(
            "Client Component: Error fetching from internal API:",
            errorMsg
          );
        } else {
          const data: ContributionApiResponse = await response.json();
          if (data.error) {
            setFetchError(data.error);
            console.error(
              "Client Component: API route returned error field:",
              data.error
            );
          } else if (!Array.isArray(data.contributions)) {
            const errorMsg = "Invalid data format received from internal API.";
            setFetchError(errorMsg);
            console.error("Client Component:", errorMsg, data);
          } else {
            setContributionData(data); // Set data to state
          }
        }
      } catch (error) {
        console.error(
          "Client Component: Network or parsing error fetching from internal API:",
          error
        );
        const errorMsg =
          error instanceof Error
            ? error.message
            : "An unknown error occurred during fetch.";
        setFetchError(errorMsg);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchData();
  }, [username]); // Re-run fetch if username changes

  // --- Loading State ---
  if (isLoading) {
    return (
      <div
        className={`p-4 border border-blue-300 bg-blue-50 text-blue-700 rounded ${className}`}
      >
        <p>Loading github contributions for {username}...</p>
      </div>
    );
  }

  // --- Error State ---
  if (fetchError || !contributionData?.contributions) {
    return (
      <div
        className={`p-4 border border-red-300 bg-red-50 text-red-700 rounded ${className}`}
      >
        <p className='font-semibold'>
          Could not load GitHub contributions for {username}.
        </p>
        {fetchError && <p className='text-sm'>Reason: {fetchError}</p>}
        {!fetchError && !contributionData?.contributions && (
          <p className='text-sm'>Reason: No contribution data found.</p>
        )}
      </div>
    );
  }

  // --- Success State ---
  const contributions: Contribution[] = contributionData.contributions;

  return (
    <div ref={calendarRef} className={className}>
      <div className='flex justify-between mb-4 font-menlo'>
        <h2 className='mb-2 font-bold'>Github Contributions</h2>
        <GithubSVG />
      </div>

      <GitHubCalendar
        username={username}
        data={contributions}
        colorScheme='light'
        blockSize={blockSize}
        blockMargin={4}
        fontSize={12}
      />
    </div>
  );
}
