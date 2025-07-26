export default async function PlayGame({
  params,
}: {
  params: Promise<{ playid: string }>;
}) {
  const playid = (await params).playid;
  return <>this is the play Game by {playid}</>;
}
