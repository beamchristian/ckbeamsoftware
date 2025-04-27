// types/react-github-calendar.d.ts

// Import the Contribution type from your existing types file
import { Contribution } from "./github"; // Use a relative path within the types folder

declare module "react-github-calendar" {
  // Re-declare the default export with the correct props
  export default function GitHubCalendar(
    props: GitHubCalendarProps
  ): JSX.Element;

  // Define the expected props for the component
  interface GitHubCalendarProps {
    username: string;
    data: Contribution[]; // <--- Add the data prop here
    colorScheme?: "light" | "dark"; // Based on typical options, make optional
    blockSize?: number; // Based on your usage, make optional
    blockMargin?: number; // Based on your usage, make optional
    fontSize?: number; // Based on your usage, make optional
    // Add any other props you use from the library that might be missing
    // For example, include touchless, showTotalCount, etc. if needed
    theme?: any; // Or define a more specific theme type if needed
    hideTotalCount?: boolean;
    hideColorLegend?: boolean;
    showWeekdayLabels?: boolean;
    // ... other props from the library
  }

  // If the library exports other things you use, you might need to add them here
  // export type SomeOtherType = ...;
}
