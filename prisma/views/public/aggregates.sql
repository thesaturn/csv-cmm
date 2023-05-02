SELECT
  1 AS id,
  count("Registro".name) AS total,
  (
    SELECT
      count("Registro_1".name) AS count
    FROM
      "Registro" "Registro_1"
    WHERE
      (
        ("Registro_1".institucion) :: text = 'Universidad de Chile' :: text
      )
  ) AS institucion_uchile,
  round(
    (
      (
        (
          (
            SELECT
              count("Registro_1".name) AS count
            FROM
              "Registro" "Registro_1"
            WHERE
              (
                ("Registro_1".institucion) :: text = 'Universidad de Chile' :: text
              )
          )
        ) :: numeric / (count("Registro".name)) :: numeric
      ) * (100) :: numeric
    ),
    2
  ) AS promedio_uchile
FROM
  "Registro";