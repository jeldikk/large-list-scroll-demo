import UserItem from "../user-item/user-item.component";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "./user-list.styles.scss";
import { useCallback, useEffect } from "react";

function UserList({ users }) {
  const itemCallback = useCallback(
    ({ index, style }) => {
      // console.log("called from itemCallback");
      // const GUTTER = 10;
      // console.log({ style });
      const alteredStyle = {
        ...style,
      };

      return <UserItem user={users[index]} style={alteredStyle} />;
    },
    [users]
  );
  // console.log({ users });

  return (
    <div className="user-list">
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            className="List"
            height={height}
            itemCount={users.length}
            itemSize={70}
            width={width}
          >
            {itemCallback}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}

export default UserList;
