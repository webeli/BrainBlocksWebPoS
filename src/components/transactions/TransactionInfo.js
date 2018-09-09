import React from 'react'
import { css } from 'react-emotion'
import theme from 'theme'
import { formatNano, formatFiat } from 'functions/format'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'

const getStyles = props => {
  const wrap = css``
  const header = css`
    text-align: center;
    margin-bottom: 2em;
  `
  const circleIcon = css`
    text-align: center;
    width: 60px;
    height: 60px;
    line-height: 64px;
    border: 4px solid ${theme.color.success};
    border-radius: 100%;
    margin: auto;
    position: relative;
    top: -2px;
    margin-bottom: 0.25em;
  `
  const typeIconReceive = css`
    ${circleIcon};
    border-color: ${theme.color.success};
    color: ${theme.color.success};
  `
  const typeIconSend = css`
    ${circleIcon};
    border-color: ${theme.color.error};
    color: ${theme.color.error};
  `
  const amountNano = css`
    display: block;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.2;
  `
  const amountFiat = css`
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: #7f7f7f;
    line-height: 1.2;
  `
  const table = css`
    width: 100%;
    max-width: 610px;
    margin: auto;
    border-collapse: collapse;
  `
  const td = css`
    text-align: left;
    padding: 0.75em 0;
    font-size: 15px;
    border-top: 1px solid ${theme.color.tableBorder};
    vertical-align: top;
  `
  const tdFirst = css`
    border-top: none;
  `
  const th = css`
    ${td};
    font-weight: 600;
  `
  const thFirst = css`
    ${td};
    ${tdFirst};
  `
  const tdVal = css`
    ${td};
    text-align: right;
    padding-left: 1em;
  `
  const tdDate = css`
    ${tdVal};
    ${tdFirst};
  `
  const tdAddr = css`
    ${tdVal};
    font-size: 14px;
    letter-spacing: -0.01em;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  `
  const tdExp = css`
    ${tdVal};
  `
  return {
    wrap,
    header,
    typeIconReceive,
    typeIconSend,
    amountNano,
    amountFiat,
    table,
    th,
    thFirst,
    tdDate,
    tdAddr,
    tdExp
  }
}

const TransactionInfo = props => {
  const classes = getStyles(props)
  const tx = props.transaction

  return (
    <div className={classes.wrap}>
      <div className={classes.header}>
        {tx.type === 'receive' ? (
          <div className={classes.typeIconReceive}>
            <ArrowDownIcon size={52} />
          </div>
        ) : (
          <div className={classes.typeIconSend}>
            <ArrowUpIcon size={52} />
          </div>
        )}
        <span className={classes.amountNano}>{formatNano(tx.nanoValue, true)}</span>
        <span className={classes.amountFiat}>
          {tx.currency !== props.currencyCode && `${tx.currency} `}
          {formatFiat(tx.fiatValue, props.getCurrencySymbol(tx.currency), true)}
        </span>
      </div>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th className={classes.thFirst}>Date</th>
            <td className={classes.tdDate}>{tx.timestamp}</td>
          </tr>
          <tr>
            <th className={classes.th}>Address</th>
            <td className={classes.tdAddr}>{tx.link}</td>
          </tr>
          <tr>
            <th className={classes.th}>Explorer</th>
            <td className={classes.tdExp}>
              <a href="#">Address</a> / <a href="#">Transaction</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TransactionInfo