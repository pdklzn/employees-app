import './app-info.css'

const AppInfo = ({data}) => {
    const bonus = data.filter(item => item.increase)

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {data.length} </h2>
            <h2>Премию получат: {bonus.length} </h2>
        </div>
        )
}

export default AppInfo