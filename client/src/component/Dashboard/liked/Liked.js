import React, { useMemo, useEffect, useState } from 'react'
import axios from 'axios';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import {
    Header,
    PropertyWrapper,
    SearchWrapper,
    CardContainer,
} from '../proprieteDashboard/propDashboard.styled';
import { FaTimes } from "react-icons/fa";
import { Row } from '../mainDashboard/MainDashboard.styled';
import { SearchIcon } from '../../SearchBar/SearchBar.styled';
import GlobalFilter from '../proprieteDashboard/GlobalFilter';
import { Icon, DeleteButton } from './Likde.styled'

function Liked() {
    const COLUMNS = [
        {
            Header: 'Image',
            accessor: 'id',
            Cell: tableProps => (
                <div>
                    <img
                        src={tableProps.row.original.image}
                        alt='home'
                    />
                </div>
            ),
        },
        {
            Header: 'Titre',
            accessor: 'title',
            Cell: tableProps => (
                <div>
                    <p className="table-title">{tableProps.row.original.title}</p>
                    <span className="table-address"><Icon />{tableProps.row.original.address}</span>
                    <p className="table-price">{tableProps.row.original.price}</p>
                </div>
            ),
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: tableProps => (
                <div>
                    <div className="wrapper">
                        <span className="table-address"> Voir: </span>
                        <p> {tableProps.row.original.view}.</p>
                    </div>
                    <div className="wrapper">
                        <span className="table-address">Publié: </span>
                        <p> {tableProps.row.original.date_pub}.</p>
                    </div>
                </div>
            ),
        },
        {
            Header: 'Type',
            accessor: 'type',
            Cell: tableProps => (
                <div>
                    <div className="wrapper">
                        <p> {tableProps.row.original.type}. {console.log(tableProps.row.original.type)};</p>
                    </div>
                </div>
            ),
        },
        {
            Header: 'Éditer',
            Cell: tableProps => (
                <div className="wrapper">
                    <DeleteButton onClick={sayHello} data-listing-id={tableProps.row.original.id_property}><FaTimes /></DeleteButton>
                </div>
            ),
        }
    ]

    
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


    const sayHello = () => {
        console.log('heloooooooo');
    }
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
                data.map(element => {
                    tempArray.push({
                        "title": element[0].substring(element[0].indexOf("\"") + 1, element[0].lastIndexOf("\"")),
                        "address": element[1].substring(element[1].indexOf('\"') + 1, element[1].lastIndexOf('\"')),
                        "type": `à ${element[5]}`,
                        "price": `DZD ${element[2]}`,
                        "view": element[3] === "" ? `0 fois` : element[3],
                        "date_pub": element[4],
                        "image": `http://localhost:3006/images/${element[6].substring(element[1].indexOf('\"') + 1, element[1].lastIndexOf(''))}`,
                        "id_property": element[element.length - 1].substring(0, element[element.length - 1].indexOf(")"))
                    })
                })
                setRealData(tempArray);
            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log(realData);
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