import { KTCard } from "../../../../_metronic/helpers";
import { Content } from "../../../../_metronic/layout/components/content";
import { ToolbarWrapper } from "../../../../_metronic/layout/components/toolbar";
import {
  ListViewProvider,
  useListView,
} from "../../apps/user-management/users-list/core/ListViewProvider";
import { QueryRequestProvider } from "../../apps/user-management/users-list/core/QueryRequestProvider";
import { QueryResponseProvider } from "../../apps/user-management/users-list/core/QueryResponseProvider";
import { UserEditModal } from "../../apps/user-management/users-list/user-edit-modal/UserEditModal";
import QuestionBankHeader from "./QuestionBankHeader";
import QuestionBankTable from "./QuestionBankTable";

const QuestionBankList = () => {
  const { itemIdForUpdate } = useListView();
  return (
    <>
      <KTCard>
        <QuestionBankHeader />
        <QuestionBankTable />
      </KTCard>
      {itemIdForUpdate !== undefined && <UserEditModal />}
    </>
  );
};

const QuestionBankListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <ToolbarWrapper />
        <Content>
          <QuestionBankList />
        </Content>
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
);

export { QuestionBankListWrapper };
