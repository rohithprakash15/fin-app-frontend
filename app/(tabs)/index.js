import { Redirect } from "expo-router";

export default function Index() {
  // Redirect to the Profile tab by default
  return <Redirect href="/Profile" />;
}
