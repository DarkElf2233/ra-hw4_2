import './training-records-form.css'

export const TrainingRecordsForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const dateToShow = e.target[0].value
    const dateToSort = e.target[0].value.split('.').reverse().join('-')
    const distance = parseFloat(e.target[1].value)
    props.handleFormData({ dateToShow: dateToShow, dateToSort: dateToSort, distance: distance })

    e.target[0].value = ''
    e.target[1].value = ''
  }

  return (
    <form className='form' autoComplete='false' onSubmit={handleSubmit}>
      <div className="form-group1">
        <label htmlFor="date">Дата</label>
        <input type="text" id='date' name='date' />
      </div>

      <div className="form-group2">
        <label htmlFor="distance">Пройдено км</label>
        <input type="text" id='distance' name='distance' />
      </div>
      <button className="btn" type="submit">ОК</button>
    </form>
  )
}
