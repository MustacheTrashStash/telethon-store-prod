import { redirect } from "next/navigation"

export default async function AccountPageLayout() {
  // Redirect all account page requests to the store
  redirect("/store")
}
