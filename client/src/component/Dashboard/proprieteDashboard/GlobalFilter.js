import React from 'react'


export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <>
            <input value={filter || ''}
            onChange={e => setFilter (e.target.value)}
            placeholder="Entrez le titre ..."
            />
        </>
    )
}

export default GlobalFilter
