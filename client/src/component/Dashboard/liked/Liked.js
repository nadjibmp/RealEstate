import React, { useMemo, useEffect, useState } from 'react'
import axios from 'axios';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { COLUMNS } from './columns'
import {
    Header,
    PropertyWrapper,
    SearchWrapper,
    CardContainer,
} from '../proprieteDashboard/propDashboard.styled';
import { Row } from '../mainDashboard/MainDashboard.styled';
import { SearchIcon } from '../../SearchBar/SearchBar.styled';
import GlobalFilter from '../proprieteDashboard/GlobalFilter';

function Liked() {
    const [realData, setRealData] = useState([])
    const columns = useMemo(() => COLUMNS, []);
    const data = realData;
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
    //Fetching data from the server 'getting listing by id'
    const getData = (req, res) => {
        const id_user = JSON.parse(localStorage.getItem("userID"));
        axios
            .get("http://localhost:3006/api/GetAllPropertyILike",
                {
                    params: {
                        id_user: id_user.userId,
                    }
                }
            )
            .then(result => {
                const tempArray = [];
                const { data } = result.data;
                console.log(data);
                data.map(element => {
                    tempArray.push({
                        "title": element[0].substring(element[0].indexOf("\"") + 1, element[0].lastIndexOf("\"")),
                        "address": element[1].substring(element[1].indexOf('\"') + 1, element[1].lastIndexOf('\"')),
                        "type": `à ${element[5]}`,
                        "price": `DZD ${element[2]}`,
                        "view": element[3] === "" ? `0 fois` : element[3],
                        "date_pub": element[4],
                        "image": `http://localhost:3006/images/${element[6].substring(element[1].indexOf('\"') + 1, element[1].lastIndexOf(''))}`
                    })
                })
                setRealData(tempArray);
            })
            // console.log(data[0][0].substring(data[1][0].indexOf("\"") + 1, data[0][0].lastIndexOf("\"")));
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        getData();
        window.scrollTo(0, 0)
    }, [])

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

export default Liked