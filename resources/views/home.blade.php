@extends('layouts.app')

@section('content')
    <style>
        button{
            width: 100px;
            height:30px;
            border-radius: 4px;
            margin:50px;
        }
        .on{
            color:#666;
            background-color: #ccc;
        }
        .off{
            color:#888;
            background-color: white;
        }
    </style>

    <div id="root"></div>

@endsection
