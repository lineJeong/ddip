import { dummyBungaeDetail } from "../@constants/dummy";
import CreateBungaeForm from "../components/CreateBungae/CreateBungaeForm";
import HeadingPageContent from "../components/PageContent/HeadingPageContent";
import RootPageContent from "../components/PageContent/RootPageContent";

function EditBungaePage() {
  return (
    <RootPageContent maxWidth="md">
      <HeadingPageContent heading="번개 모임 만들기">
        <CreateBungaeForm bungaeDetail={dummyBungaeDetail} />
      </HeadingPageContent>
    </RootPageContent>
  );
}

export default EditBungaePage;
