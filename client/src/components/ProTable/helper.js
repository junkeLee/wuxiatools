import { View } from '@tarojs/components';

export const formatColumns = (columns, align = 'left') => {
  return columns?.map(i => ({
    ...i,
    align,
    render: record => {
      const data = record?.[i?.key];
      if (Array.isArray(data)) {
        return (
          <>
            {data.map(i => (<View>{i}</View>))}
          </>
        );
      }
      return data;
    }
  }));
};