import { PageContainer } from '@ant-design/pro-layout';
import { Link } from 'umi';
export default () => {
  return (
    <PageContainer>
      菜单分类一功能一列表
      <Link to={'/menu1/sub1/detail'}>详情一</Link>
    </PageContainer>
  );
};
