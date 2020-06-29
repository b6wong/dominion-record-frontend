import React, { useState, useEffect } from "react";
import GameDataService from "../services/GameService";
import { useTable } from "react-table";

const columns = [
    {
        Header: "Player 1",
        columns: [
            {
                Header: "Player 1",
                accessor: "player1"
            },
            {
                Header: "Score 1",
                accessor: "score1"
            }
        ]
    },
    {
        Header: "Player 2",
        columns: [
            {
                Header: "Score 2",
                accessor: "score2"
            },
            {
                Header: "Player 2",
                accessor: "player2"
            }
        ]
    },
    {
        Header: "Date",
        columns: [
            {
                Header: "Date",
                accessor: "date"
            }
        ]
    }
];

const GamesList = () => {
    const [data, setGames] = useState([]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

    useEffect(() => {
        retrieveGames();
    }, []);

    const retrieveGames = () => {
        GameDataService.getAll()
            .then(response => {
                setGames(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">
            
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GamesList;