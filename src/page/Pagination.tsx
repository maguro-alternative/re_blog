import * as React from 'react'
import { useState, useEffect, useRef } from 'react'

interface Props {
    sum: number
    per: number
    onChange: (e: { page: number }) => void
}

const Pagination = (props: Props) => {
    const [currentPage, setPage] = useState(1)
    const isFirstRender = useRef(true)

    // 初期にはuseEffectでprops.onChangeを実行しないようにしている
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        // currentPageに変化があったときに親コンポーネントにcurrentpage番号を渡す
        props.onChange({ page: currentPage });
    }, [currentPage])

    const totalPage: number = Math.ceil(props.sum / props.per)
    // 切り上げをしていてtotalPageが4.3などだった場合5にしている
    const totalPageArray: number[] = Array.from(new Array(totalPage)).map((_, i) => i++);
    // 「前へ」ボタンを押したときの処理
    const handleBack = (): void => {
        //1ページ目の場合の処理
        if (currentPage === 1) {
            return
        }

        setPage(currentPage - 1)
    }

    // 「次へ」ボタンを押したときの処理
    const handleForward = (): void => {
        //最後のページで押したときの処理
        if (currentPage === totalPage) {
            return
        }

        setPage(currentPage + 1)
    }

    // 「最初」ボタンを押したときの処理
    const handleToFirstPage = (): void => {
        setPage(1)
    }

    // 「最後」ボタンを押したときの処理
    const handleToLastPage = (): void => {
        setPage(totalPage)
    }

    //ページボタンを押したときの処理
    const handleMove = (page: number): void => {
        setPage(page)
    }

    return (
        <>
            <button onClick={handleToFirstPage}>最初へ</button>
            <button onClick={handleBack}>&laquo;前へ</button>
            {totalPageArray.map(page => {
                // 配列に格納されている番号は0スタートなので最初に+1している
                page++
                return page === currentPage ? (
                    <span style={{ cursor: 'pointer', margin: '0 5px' }} key={page} onClick={() => handleMove(page)}>
                        {page}
                    </span>
                ) : (
                        <span style={{ cursor: 'pointer', margin: '0 5px' }} key={page} onClick={() => handleMove(page)}>{page}</span>
                    )
            })}
            <button onClick={handleForward}>次へ&raquo;</button>
            <button onClick={handleToLastPage}>最後へ</button>
        </>
    )
}

export default Pagination