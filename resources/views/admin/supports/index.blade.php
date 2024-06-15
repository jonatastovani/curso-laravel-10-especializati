@extends('layout')
@section('content')
    <h1>Listagens dos Suportes</h1>
    <div class="row">
        <div class="col mt-2">
            <a href="{{ route('supports.create') }}" class="btn btn-outline-primary btn-sm">Nova dúvida</a>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
                <th>Ação</th>
                <th>Assunto</th>
                <th>Descrição</th>
            </thead>
            <tbody></tbody>
        </table>
    </div>
@endsection
