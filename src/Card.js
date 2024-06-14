export function Card({ city, degrees, onDeleteCity }) {
  return (
    <div className="card">
      <div class="card-header">
        <div class="">
          <h2>{city}</h2>
          <p>Fri, 19 February, 10:17</p>
        </div>

        <button className="delete-button" onClick={() => onDeleteCity(city)}>
          ✖
        </button>
      </div>

      <div class="charts">
        <h1>CHAAAAAAAAAAAAAAAAAAAAAAAAAARTS</h1>
        <h1>CHAAAAAAAAAAAAAAAAAAAAAAAAAARTS</h1>
      </div>

      <div class="card-footer">
        <div class="degrees">
          <p>{degrees}</p>
          <p class="feels">Feels like: +22</p>
        </div>
        <div class="details">
          <p class="details-item">
            <span>Wind:</span> <span class="details-size">16 m/s</span>
          </p>
          <p class="details-item">
            <span>Humidity:</span> <span class="details-size">13%</span>
          </p>
          <p class="details-item">
            <span>Presure:</span> <span class="details-size">600 Pa</span>
          </p>
        </div>
      </div>
    </div>
  )
}
