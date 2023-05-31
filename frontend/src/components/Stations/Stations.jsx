import React, { useEffect, useState } from "react";
import { API } from "../../constants/RouteConstant";
import { Table, Input, InputGroup, Pagination, Col } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const { Column, HeaderCell, Cell } = Table;

const Stations = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  useEffect(() => {
    if (flag) getSortedStationData(sortColumn, sortType);
  }, [page]);

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
    getSortedStationData(sortColumn, sortType);
  };


  const getStationDataByFID = async (id) => {
    setLoading(true);
    const res = await fetch(`${API.Stations}/${id}`)
      .then((e) => e.json())
      .then((e) => e)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    setCount(res.length);
    setData(res);
  };

  const getSortedStationData = async (sortColumn, sortType) => {
    setLoading(true);
    const data = {
      limit: limit,
      sort: sortColumn,
      sortOrder: sortType === "asc" ? 1 : -1,
      skip: (page - 1) * limit,
    };
    const res = await fetch(API.Stations, {
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
    setData(res.stations);
  };

  useEffect(() => {
    getSortedStationData(sortColumn, sortType);
  }, [limit]);

  useEffect(() => {
    if (search.length === 0 && flag) getSortedStationData(sortColumn, sortType);
  }, [search]);

  const searchHandler = () => {
    getStationDataByFID(parseInt(search));
  };

  const [selectedOption, setSelectedOption] = useState("10");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setPage(1);
    setLimit(parseInt(event.target.value));
  };

  return (
    <>
      <div className="d-flex">
        <Col xs={24} sm={12} md={8}>
          <InputGroup>
            <Input
              placeholder="Search station by FID"
              value={search}
              onChange={(value) => {
                setSearch(value);
              }}
            />
            <InputGroup.Addon className="s-style" onClick={searchHandler}>
              <SearchIcon />
            </InputGroup.Addon>
          </InputGroup>
        </Col>
      </div>
      <Table
        height={420}
        data={data}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        virtualized
      >
        <Column width={70} align="center" fixed sortable>
          <HeaderCell>FId</HeaderCell>
          <Cell dataKey="fid" />
        </Column>
        <Column width={70} align="center" fixed sortable>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={130} sortable>
          <HeaderCell>Nimi</HeaderCell>
          <Cell dataKey="nimi" />
        </Column>

        <Column width={130} sortable>
          <HeaderCell>Namn</HeaderCell>
          <Cell dataKey="namn" />
        </Column>
        <Column width={130} sortable>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={100} sortable>
          <HeaderCell>Osoite</HeaderCell>
          <Cell dataKey="osoite" />
        </Column>

        <Column width={100} sortable>
          <HeaderCell>Adress</HeaderCell>
          <Cell dataKey="adress" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>Kaupunki</HeaderCell>
          <Cell dataKey="kaupunki" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>Stad</HeaderCell>
          <Cell dataKey="stad" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>Operaattor</HeaderCell>
          <Cell dataKey="operaattor" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>Kapasiteet</HeaderCell>
          <Cell dataKey="kapasiteet" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>X</HeaderCell>
          <Cell dataKey="x" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>Y</HeaderCell>
          <Cell dataKey="y" />
        </Column>
        <Column width={100} sortable>
          <HeaderCell>Journeys Start</HeaderCell>
          <Cell dataKey="total_journeys_starting" />
        </Column>

        <Column width={100} sortable>
          <HeaderCell>Journeys Ending</HeaderCell>
          <Cell dataKey="total_journeys_ending" />
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
          limit={parseInt(selectedOption)}
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

export default Stations;
