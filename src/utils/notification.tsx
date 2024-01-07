import { Button, notification } from 'antd';

interface NotificationOptions {
    message: string;
    description?: string;
}

const openNotification = (type: 'success' | 'info' | 'warning' | 'error', options: NotificationOptions) => {
    notification[type]({
        message: options.message,
        description: options.description,
    });
};

export default openNotification