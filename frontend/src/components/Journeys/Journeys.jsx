import React, { useEffect, useState } from "react";
import { API } from "../../constants/RouteConstant";
import { Table, Pagination } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

const Journeys = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [flag, setFlag] = useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  useEffect(() => {
    if(flag)
        getSortedJourneyData(sortColumn,sortType);
  }, [page]);

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
    getSortedJourneyData(sortColumn, sortType);
  };

  const getSortedJourneyData = async (sortColumn, sortType) => {
    setLoading(true);
    const data = {
      limit: limit,
      sort: sortColumn,
      sortOrder: sortType === "asc" ? 1 : -1,
      skip: (page - 1)*limit
    };
    const res = await fetch(`${API.Journey}/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((e) => e.json())
      .then((e) => e)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
      setFlag(true);
      setCount(res.count);
    setData(res.journey);
  };

  useEffect(() => {
    getSortedJourneyData(sortColumn,sortType);
  }, [limit]);

  const [selectedOption, setSelectedOption] = useState("10");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setPage(1);
    setLimit(parseInt(event.target.value));
  };

  return (
    <>
      <Table
        height={420}
        data={data}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        virtualized
      >
        <Column width={170} align="center" sortable>
          <HeaderCell>Departure</HeaderCell>
          <Cell dataKey="Departure" />
        </Column>
        <Column width={170} align="center" sortable>
          <HeaderCell>Return</HeaderCell>
          <Cell dataKey="Return" />
        </Column>

        <Column width={150} sortable>
          <HeaderCell>Departure Station Id</HeaderCell>
          <Cell dataKey="Departure_station_id" />
        </Column>

        <Column width={170} sortable>
          <HeaderCell>Departure Station Name</HeaderCell>
          <Cell dataKey="Departure_station_name" />
        </Column>
        <Column width={150} sortable>
          <HeaderCell>Return Station Id</HeaderCell>
          <Cell dataKey="Return_station_id" />
        </Column>

        <Column width={170} sortable>
          <HeaderCell>Return Station Name</HeaderCell>
          <Cell dataKey="Return_station_name" />
        </Column>

        <Column width={150} sortable>
          <HeaderCell>Covered Distance</HeaderCell>
          <Cell dataKey="Covered_distance" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>Duration</HeaderCell>
          <Cell dataKey="Duration" />
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "|", "pager", "skip"]}
          total={count}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          // onChangeLimit={handleChangeLimit}
        />
      </div>
      <div className="pagi">
        <select value={selectedOption} onChange={handleChange}>
          <option value="10">10</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </>
  );
};

export default Journeys