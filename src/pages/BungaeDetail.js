import { useEffect, useState } from "react";

import { dummyBungaeDetail } from "../@constants/dummy";
import BungaeDetail from "../components/BungaeDetail/BungaeDetail";
import RootPageContent from "../components/PageContent/RootPageContent";

function BungaeDetailPage() {
  const [bungaeDetail, setBungaeDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBungaeDetail(dummyBungaeDetail);
    setIsLoading(false);
  }, []);

  if (isLoading) return;

  return (
    <RootPageContent maxWidth="md">
      <BungaeDetail bungaeDetail={bungaeDetail} />
    </RootPageContent>
  );
}

export default BungaeDetailPage;
