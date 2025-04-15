export const Overview = ({ overview = "No overview available." }: { overview?: string }) => {
  return (
    <div className="w-auto h-full lg:mx-48 mt-[200px] rounded-lg mx-10 sm:mx-10">
      <h2 className="text-3xl font-semibold">Overview</h2>
      <p className="mt-4 text-lg text-muted-foreground">{overview}</p>
    </div>
  )
}
