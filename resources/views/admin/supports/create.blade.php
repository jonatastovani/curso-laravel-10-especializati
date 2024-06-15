@extends('layout')
@section('content')
    <h1>Nova Dúvida</h1>
    <form action="{{ route('supports.store') }}" method="post">
        <div class="row">
            <div class="col-4 mt-2">
                <label for="subject">Assunto</label>
                <input type="text" name="subject" id="subject" class="form-text">
            </div>
        </div>
        <div class="row">
            <div class="col-12 mt-2">
                <label for="description">Descrição</label>
                <textarea name="body" class="form-control" id="description"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col mt-2">
                <button type="submit" class="btn btn-outline-success">Enviar</button>
            </div>
        </div>
        <input type="text" name="_token" value="{{ csrf_token() }}">
    </form>
@endsection
