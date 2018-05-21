<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProblemReport extends Model
{
    public $table = "problem_reports";
    protected $primaryKey = 'report_id';
}
