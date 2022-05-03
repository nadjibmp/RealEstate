import { FaMapMarkerAlt, FaTimes, FaEllipsisH } from "react-icons/fa";
import styled from "styled-components";

const Icon  = styled(FaMapMarkerAlt)`
    font-size: 12px;
    color:#EFA13B;
    margin-right: 3px;
`;

const DeleteButton  = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width: 40px;
    height: 40px;
    background-color: #EFA13B;
    color: #fff;
    border-radius: 8px;
    margin: 0 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #F0F4F8;
        color: #000;
        border: 1px solid #e9e9e9;
    }
`;

const EditButton  = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 12px;
    background-color: #F0F4F8;
    color: rgba(0,0,0,0.9);
    border-radius: 8px;
    border: 1px solid #e9e9e9;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #EFA13B;
        color: #fff;
    }
`;
export const COLUMNS = [
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
        Header:'Status',
        accessor:'status',
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
        Header:'Type',
        accessor:'type',
        Cell: tableProps => (
            <div>
                <div className="wrapper">
                    <p> {tableProps.row.original.type}.</p>
                </div>
            </div>
        ),
    },
    {
        Header:'Éditer',
        Cell: tableProps => (
            <div className="wrapper">
                <EditButton><FaEllipsisH/></EditButton>
                <DeleteButton><FaTimes/></DeleteButton>
            </div>
        ),
    }
]
