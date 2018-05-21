@extends('voyager::master')


@section('content')

    <div class="container">
  <h2>Building Table</h2>
  <p>List of all of our buildings</p>
  <table class="table">
    <thead>
      <tr>
        <th>Building Name</th>
        <th>City</th>
        <th>Building Address</th>
      </tr>
    </thead>
    <tbody>
        @foreach($building as $data)
            <tr>
                <th>{{$data->building_name}}</th>
                <th>{{$data->city}}</th>
                <th>{{$data->building_address}}</th>
            </tr>
        @endforeach
    </tbody>
  </table>
</div>

@stop
