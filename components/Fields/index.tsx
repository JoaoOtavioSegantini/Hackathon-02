import { Col, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap'

type Fields = {
  fields: object
  values?: object
  setValues?: any
  disabled: boolean
  handleSubmit?: any
}
export default function Fields({
  fields,
  values,
  setValues,
  disabled,
  handleSubmit
}: Fields) {
  return Object.keys(fields).map((field: unknown) => {
    return !fields[field].hidden ? (
      <Col
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        key={fields[field].label}
      >
        <InputGroup className="mt-3">
          <FormLabel as={Col} lg={12}>
            {fields[field].label}
          </FormLabel>
          <FormControl
            value={values ? values[field] : undefined}
            disabled={disabled}
            name={fields[field].name}
            onChange={e => {
              setValues({ ...values, [field]: e.target.value })
            }}
            type={fields[field].type}
            placeholder={fields[field].placeholder}
            required={fields[field].required}
          />
        </InputGroup>
      </Col>
    ) : undefined
  })
}
