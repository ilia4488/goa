


// 1. რა განსხვავებაა props-სა და props.children-ს შორის?
// 2. შესაძლებელია თუ არა Props-ით მიღებული მონაცემების პირდაპირ შეცვლა კომპონენტში? ახსენი რატომ.
// 3. შექმენი Student კომპონენტი, რომელიც Props-ით მიიღებს name, age და grade მონაცემებს და გამოაჩენს მათ გვერდზე.
// 4. შექმენი Button კომპონენტი, რომელიც Props-ით მიიღებს text-ს. App კომპონენტში გამოაჩინე სამი ღილაკი სხვადასხვა ტექსტით.
// 5. შექმენი Card კომპონენტი, რომელიც props.children-ის გამოყენებით გამოაჩენს მის შიგნით გადაცემულ ტექსტს.
// 1)propi gamoiyeneba mshobeli elementidan shvil elementistvis monacemebis gadasacemad da props.children miigebs am monacemebs
// 2)ara radgan props marto wasakitxia



// 3)
export function Student(props) {
  return(
    <div>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Grade:{props.grade}</p>
    </div>
  )
}
//4
export function Button(props) {
  return <button>{props.text}</button>;
}
//5
export function Card(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

