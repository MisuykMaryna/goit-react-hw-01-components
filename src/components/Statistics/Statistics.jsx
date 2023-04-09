import {StatisticItem} from 'components/Statistics/StatisticItem'

export const Statistics = ({ title = '', stats = [] }) => {
    return (
        <section class="statistics">
  {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
          {stats.map(({ id, label, percentage }) =>(<StatisticItem key={id} label = {label}  percentage = { percentage} />))}
    
  </ul>
</section>
    )
}