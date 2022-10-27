import { useState } from 'react';
import { Address } from '../../components/Address';

const token = '6d76298211a535bf27399df048db36a5c9cc6124';

export interface IAddress {
  value: string;
  unrestricted_value: string;
  data: Data;
}

export interface Data {
  postal_code: unknown;
  country: string;
  country_iso_code: string;
  federal_district: unknown;
  region_fias_id: string;
  region_kladr_id: string;
  region_iso_code: string;
  region_with_type: string;
  region_type: string;
  region_type_full: string;
  region: string;
  area_fias_id: unknown;
  area_kladr_id: unknown;
  area_with_type: unknown;
  area_type: unknown;
  area_type_full: unknown;
  area: unknown;
  city_fias_id: string;
  city_kladr_id: string;
  city_with_type: string;
  city_type: string;
  city_type_full: string;
  city: string;
  city_area: unknown;
  city_district_fias_id: unknown;
  city_district_kladr_id: unknown;
  city_district_with_type: unknown;
  city_district_type: unknown;
  city_district_type_full: unknown;
  city_district: unknown;
  settlement_fias_id: unknown;
  settlement_kladr_id: unknown;
  settlement_with_type: unknown;
  settlement_type: unknown;
  settlement_type_full: unknown;
  settlement: unknown;
  street_fias_id: string;
  street_kladr_id: string;
  street_with_type: string;
  street_type: string;
  street_type_full: string;
  street: string;
  stead_fias_id: unknown;
  stead_cadnum: unknown;
  stead_type: unknown;
  stead_type_full: unknown;
  stead: unknown;
  house_fias_id: unknown;
  house_kladr_id: unknown;
  house_cadnum: unknown;
  house_type: unknown;
  house_type_full: unknown;
  house: unknown;
  block_type: unknown;
  block_type_full: unknown;
  block: unknown;
  entrance: unknown;
  floor: unknown;
  flat_fias_id: unknown;
  flat_cadnum: unknown;
  flat_type: unknown;
  flat_type_full: unknown;
  flat: unknown;
  flat_area: unknown;
  square_meter_price: unknown;
  flat_price: unknown;
  postal_box: unknown;
  fias_id: string;
  fias_code: unknown;
  fias_level: string;
  fias_actuality_state: string;
  kladr_id: string;
  geoname_id: string;
  capital_marker: string;
  okato: string;
  oktmo: string;
  tax_office: string;
  tax_office_legal: string;
  timezone: unknown;
  geo_lat: string;
  geo_lon: string;
  beltway_hit: unknown;
  beltway_distance: unknown;
  metro: unknown;
  divisions: unknown;
  qc_geo: string;
  qc_complete: unknown;
  qc_house: unknown;
  history_values: string[];
  unparsed_parts: unknown;
  source: unknown;
  qc: unknown;
}

export const AddressPage = () => {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const results = addresses.map((item: IAddress) => (
    <li key={item.data.region_fias_id} className="addresspage__result">
      <Address {...item} />
    </li>
  ));

  const fetchAddresses = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };

    const query = target.search.value;
    setIsLoading(true);
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token,
      },
      body: JSON.stringify({ query: query }),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setAddresses(data.suggestions);
      })
      .catch((error) => console.log('error', error));

    setIsLoading(false);
  };
  return (
    <section className="addresspage">
      <h2 className="page__heading">Поиск адресов</h2>
      <p className="page__text">Введите интересующий вас адрес</p>
      <form className="searchbar" onSubmit={(e) => fetchAddresses(e)}>
        <input
          type="search"
          className="searchbar__field"
          name="search"
          autoComplete="off"
          placeholder="Введите интересующий вас адрес"
        />
        <button type="submit" className="searchbar__btn">
          Поиск
        </button>
      </form>
      {addresses.length > 0 && (
        <div className="addresspage__results">
          <h3 className="addresspage__subheading">Адреса</h3>
          {isLoading ? <p>Загрузка ...</p> : <ul>{results}</ul>}
        </div>
      )}
    </section>
  );
};
