import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

const menuItems = [
  { key: 'dashboard', icon: <PieChartOutlined />, label: 'Dashboard', link: '/dashboard' },
  {
    key: 'usersSection',
    icon: <DesktopOutlined />,
    label: 'Users Section',
    submenu: [
      { key: 'users', label: 'Users', link: '/dashboard/users' }
    ],
  },
  { key: 'vehicles', icon: <FileOutlined />, label: 'Vehicles', link: '/dashboard/vehicles' },
  { key: 'security', icon: <FileOutlined />, label: 'Security', link: '/dashboard/security' },
  { key: 'bouncers', icon: <FileOutlined />, label: 'Bouncers', link: '/dashboard/bouncers' },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    // Update selectedKey when route changes
    const currentMenuItem = menuItems.find((item) => {
      if (item.submenu) {
        const subItem = item.submenu.find((sub) => {
          const link = sub.link || '';
          return pathname === link;
        });

        return subItem !== undefined;
      } else {
        const link = item.link || '';
        return pathname === link;
      }
    });

    if (currentMenuItem) {
      setSelectedKey(currentMenuItem.key);
    }
  }, [pathname]);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} className="bg-gray-800 text-white h-100vh">
      <div className="flex items-center justify-center h-12 my-4 bg-opacity-20 bg-white">
        Logo
      </div>
      <Menu theme="dark" selectedKeys={selectedKey ? [selectedKey] : undefined} mode="inline">
        {menuItems.map((item) => {
          if (item.submenu) {
            return (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.submenu.map((subItem) => (
                  <Menu.Item key={subItem.key}>
                    <Link href={subItem.link}>{subItem.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link href={item.link}>{item.label}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
