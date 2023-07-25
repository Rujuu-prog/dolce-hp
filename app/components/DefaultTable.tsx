import styled from "styled-components";

export function DefaultTable() {
  return (
    <>
      <STable border={1}>
        <tbody>
          <tr>
            <th>利用時間</th>
            <td>11:00 〜 18:00</td>
          </tr>
          <tr>
            <th>席数</th>
            <td>最大30席</td>
          </tr>
          <tr>
            <th>設備</th>
            <td>
              グランドピアノ
              <br />
              リードオルガン
              <br />
              マイク・スピーカー
              <br />
              プロジェクター
            </td>
          </tr>
        </tbody>
      </STable>
    </>
  );
}

const STable = styled.table`
  /* border: 1px solid #dbdbdb; */
  border-collapse: collapse;
  margin: 0;
  width: 100%;
  border-color: #dbdbdb;
  th {
    padding: 25px;
    background-color: #dbdbdb;
    text-align: start;
  }
  td {
    padding: 20px;
    &:before {
      content: attr(data-title);
      display: block;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;
