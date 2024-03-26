import pyowm


owm = pyowm.OWM('your-api-key')


def get_weather_info(location):
    try:
        observation = owm.weather_at_place(location)
        w = observation.get_weather()
        wind = w.get_wind()
        sunrise_time = w.get_sunrise_time('iso')
        sunset_time = w.get_sunset_time('iso')

        print("Current weather in", location)
        print("Weather status:", w.get_detailed_status())
        print("Temperature:", w.get_temperature('celsius')['temp'], "°C")
        print("Wind speed:", wind['speed'], "knots")
        print("Sunrise time:", sunrise_time)
        print("Sunset time:", sunset_time)
    except pyowm.commons.exceptions.NotFoundError:
        print("Location not found.")
    except Exception as e:
        print("An error occurred:", e)


def get_forecast(location):
    try:
        forecast = owm.three_hours_forecast(location)
        print("Weather forecast for", location)
        for weather in forecast:
            print("Time:", weather.get_reference_time('iso'))
            print("Weather status:", weather.get_detailed_status())
            print("Temperature:", weather.get_temperature('celsius')['temp'], "°C")
            print("Wind speed:", weather.get_wind()['speed'], "knots")
            print("---------------------------------------")
    except pyowm.commons.exceptions.NotFoundError:
        print("Location not found.")
    except Exception as e:
        print("An error occurred:", e)


def get_location_id(location_name):
    try:
        mgr = owm.city_id_registry()
        city = mgr.ids_for(location_name)
        if city:
            return city[0]
        else:
            print("Location not found.")
            return None
    except Exception as e:
        print("An error occurred:", e)
        return None


def main():
    location_name = input("Enter a location: ")
    location_id = get_location_id(location_name)
    if location_id:
        choice = input("Enter '1' for current weather or '2' for forecast: ")
        if choice == '1':
            get_weather_info(location_id)
        elif choice == '2':
            get_forecast(location_id)
        else:
            print("Invalid choice. Please enter '1' or '2'.")

if __name__ == "__main__":
    main()
