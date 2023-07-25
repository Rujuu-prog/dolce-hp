import styled from "styled-components";

import { noto_sans_jp } from "./Font";

interface Props {
  tableData: Datas;
}

interface Datas {
  [key: string]: Data;
}

interface Data {
  ご利用目的: string;
  料金: string;
  備考: string;
}

export function CircleTable(props: Props) {
  const { tableData } = props;
  return (
    <>
      <SScroll>
        <STable className={noto_sans_jp.className}>
          <thead>
            <tr>
              <th>ご利用目的</th>
              <th>ご利用料金</th>
              <th>備考</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(tableData).map((key) => {
              const values = Object.values(tableData[key]);
              return (
                <tr key={key}>
                  <th>{values[0]}</th>
                  <td data-title="ご利用料金">{values[1]}</td>
                  <td data-title="備考">{values[2]}</td>
                </tr>
              );
            })}
          </tbody>
        </STable>
      </SScroll>
    </>
  );
}

const SScroll = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  width: 80%;
  min-width: 400px;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`;

const STable = styled.table`
  border-collapse: separate;
  border-spacing: 5px;
  width: 100%;

  th,
  td {
    border-radius: 5px;
    text-align: center;
    padding: 10px 5px;
  }

  th {
    background-color: #fff;
    color: #000;
  }

  td {
    background-color: #ebebeb;
    color: #4a4946;
  }
`;
