import { useLocation } from "react-router-dom";

import CreateBungaeForm from "../components/CreateBungae/CreateBungaeForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

function EditBungaePage() {
  const { state } = useLocation();

  return (
    <RootPageContent maxWidth="md">
      <HeadingPageContent heading="번개 모임 만들기">
        <CreateBungaeForm bungaeDetail={state} />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default EditBungaePage;
