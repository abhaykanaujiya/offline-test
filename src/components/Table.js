export default function StyledTable({ personInfo }) {
  return (
    <table>
      <thead>
        <tr style={{ backgroundColor: "#737373", color: "white" }}>
          <th>Name</th>
          <th>Vaccination Date</th>
          <th>Vaccination Status</th>
        </tr>
      </thead>
      <tbody>
        {personInfo?.map((list) => (
          <tr className={!list?.isVaccinated ? "pending" : "vaccinated"}>
            <td>{list.person_name}</td>
            <td>{list.vaccination_date}</td>
            <td>
              {list?.isVaccinated ? "Vaccination done" : "Vaccination Pending"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
