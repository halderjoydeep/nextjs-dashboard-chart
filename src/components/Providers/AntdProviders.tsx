import { antdTheme } from '@/themes/antd-theme';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

export const AntDProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};
