import React, { useMemo } from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import Mock_Data from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import {
  Header,
  PropertyWrapper,
  SearchWrapper,
  CardContainer
} from './propDashboard.styled';
import { Row } from '../mainDashboard/MainDashboard.styled';
import { SearchIcon } from '../../SearchBar/SearchBar.styled';
import GlobalFilter from './GlobalFilter';

function PropDashboard() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Mock_Data, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    nextPage,
    previousPage,
    prepareRow,
    pageOptions,
    setGlobalFilter,
    canNextPage,
    gotoPage,
    pageCount,
    canPreviousPage
  } = useTable({
    columns,
    data,
  },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  return (
    <>
      <PropertyWrapper>
        <Row container row justifyCenter="true" alignCenter>
          <Row item xs={2} >
            <Header>Mes Propriétés</Header>
          </Row>
          <Row item xs={8}>
            <SearchWrapper>
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
              <SearchIcon />
            </SearchWrapper>
          </Row>
          <Row item xs={2}>
            <SearchWrapper>

            </SearchWrapper>
          </Row>
        </Row>
        <CardContainer>
          <table {...getTableProps} className='styled-table'>
            <thead >
              {
                headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                      headerGroup.headers.map((column) => (
                        <th>
                          {column.render('Header')}
                        </th>
                      ))
                    }
                  </tr>
                ))
              }

            </thead>
            <tbody {...getTableBodyProps()}>
              {
                page.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()} >
                      {
                        row.cells.map((cell) => {
                          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div className='pagination-wrapper'>
            <div>
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}> <FaAngleDoubleLeft /> </button>
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>Précédent</button>
              <div className='page-num'>
                {pageIndex + 1} / {pageOptions.length}
              </div>
              <button onClick={() => nextPage()} disabled={!canNextPage}>Suivant</button>
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}> <FaAngleDoubleRight /> </button>
            </div>
          </div>
        </CardContainer>
      </PropertyWrapper>
    </>
  );
}

export default PropDashboard