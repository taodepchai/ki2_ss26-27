let Bt9 = () => {
    return (
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Table Example</title>
  <link rel="stylesheet" href="bt9.css" />
  <h1>bt9</h1>
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>Họ và tên</th>
        <th>Ngày sinh</th>
        <th>Giới tính</th>
        <th>Địa chỉ</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Malcolm Lockyer</td>
        <td>21/03/1961</td>
        <td>Nam</td>
        <td>New york</td>
        <td>
          <button className="edit">Sửa</button>
          <button className="delete">Xóa</button>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Maria</td>
        <td>11/02/1980</td>
        <td>Nữ</td>
        <td>London</td>
        <td>
          <button className="edit">Sửa</button>
          <button className="delete">Xóa</button>
        </td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</>
    )
}


export default Bt9;