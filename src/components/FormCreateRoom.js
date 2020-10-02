import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const FormCreateRoom = () => {
  const main_image = localStorage.getItem("main_image");
  const secondary_images = JSON.parse(localStorage.getItem("secondary_images"));
  console.log(secondary_images);
  const userId = sessionStorage.getItem("user-id");
  // console.log(secondary_images)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);

    const newData = { ...data, main_image, secondary_images, userId };
    console.log(JSON.stringify(newData));

    axios({
      url: "/rooms",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: newData,
    })
      .then((response) => {
        console.log(response);
        alert("Cuarto creado, te redirigimos para que puedas verlo");
        const roomId = response.data.body._id;
        console.log(roomId);
        sessionStorage.setItem("roomId", roomId);
        window.location.href = `/room-details/${roomId}`;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="room-section">
      {localStorage.getItem("secondary_images") &&
        localStorage.getItem("main_image") && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="room-basic-data">
              <label className="register-info available">
                <p>Esta disponible:</p>
                <input
                  type="checkbox"
                  placeholder="available"
                  name="available"
                  ref={register}
                  defaultChecked
                />
              </label>
              <label className="register-info">
                <p>Ciudad:</p>
                <select name="city" ref={register({ required: true })}>
                  <option value="Medellin">Medellin</option>
                  <option value=" Bogota"> Bogota</option>
                  <option value=" Cali"> Cali</option>
                  <option value=" Barranquilla"> Barranquilla</option>
                </select>
              </label>

              <label className="register-info">
                <p>Título de tu habitación: </p>
                <input
                  type="text"
                  required="required"
                  placeholder="room_name"
                  name="room_name"
                  ref={register({ required: true, min: 3 })}
                />
              </label>

              <label className="register-info">
                <p>Precio del alquiler mensual (COP):</p>
                <input
                  type="number"
                  placeholder="price"
                  name="price"
                  required="required"
                  ref={register}
                />
              </label>

              <label className="register-info">
                <p>Dirección:</p>
                <input
                  type="text"
                  placeholder="address"
                  name="address"
                  ref={register}
                />
              </label>

              <label className="register-info">
                <p>
                  Área del cuarto (mts<sup>2</sup>):
                </p>
                <input
                  type="number"
                  placeholder="square_meters"
                  required="required"
                  name="square_meters"
                  ref={register}
                />
              </label>
            </div>

            <p>Selecciona el mobiliario con el que cuenta el cuarto</p>
            <div className="room-details">
              <label>
                Cama
                <input
                  type="checkbox"
                  placeholder="bed"
                  name="bed"
                  ref={register}
                />
              </label>

              <label>
                Escritorio
                <input
                  type="checkbox"
                  placeholder="desk"
                  name="desk"
                  ref={register}
                />
              </label>

              <label>
                Armario{" "}
                <input
                  type="checkbox"
                  placeholder="closet"
                  name="closet"
                  ref={register}
                />
              </label>

              <label>
                Silla{" "}
                <input
                  type="checkbox"
                  placeholder="chair"
                  name="chair"
                  ref={register}
                />
              </label>

              <label>
                Sofá{" "}
                <input
                  type="checkbox"
                  placeholder="couch"
                  name="couch"
                  ref={register}
                />
              </label>
            </div>

            <p>
              Selecciona los servicios a los que tendrán acceso tus huéspedes
            </p>

            <div className="room-details">
              <label>
                Cocina
                <input
                  type="checkbox"
                  placeholder="kitchen"
                  name="kitchen"
                  ref={register}
                />
              </label>

              <label>
                Visitas
                <input
                  type="checkbox"
                  placeholder="visits"
                  name="visits"
                  ref={register}
                />
              </label>

              <label>
                Internet
                <input
                  type="checkbox"
                  placeholder="wifi"
                  name="wifi"
                  ref={register}
                />
              </label>

              <label>
                Parqueadero
                <input
                  type="checkbox"
                  placeholder="parking"
                  name="parking"
                  ref={register}
                />
              </label>

              <label>
                Lavadora <br />
                <input
                  type="checkbox"
                  placeholder="washing_machine"
                  name="washing_machine"
                  ref={register}
                />
              </label>

              <label>
                Televisión
                <input
                  type="checkbox"
                  placeholder="television"
                  name="television"
                  ref={register}
                />
              </label>

              <label>
                Calefacción
                <input
                  type="checkbox"
                  placeholder="heating"
                  name="heating"
                  ref={register}
                />
              </label>

              <label>
                Baño privado
                <input
                  type="checkbox"
                  placeholder="private_bathroom"
                  name="private_bathroom"
                  ref={register}
                />
              </label>

              <label>
                Gimnasio
                <input
                  type="checkbox"
                  placeholder="gymnasium"
                  name="gymnasium"
                  ref={register}
                />
              </label>

              <label>
                Aire acondicionado
                <input
                  type="checkbox"
                  placeholder="air_conditioner"
                  name="air_conditioner"
                  ref={register}
                />
              </label>
            </div>

            <label className="room-text-info">
              <p>
                Cuéntale a tus huéspedes los beneficios que tiene el vivir
                contigo, habla un poco de ti también.
              </p>
              <textarea
                required="required"
                placeholder="Escribe"
                name="room_description"
                ref={register}
              />
            </label>

            <button type="submit">Guardar</button>
          </form>
        )}
    </section>
  );
};
